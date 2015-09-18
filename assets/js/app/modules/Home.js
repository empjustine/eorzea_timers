App.module("Home", function(Home, App, Backbone, Marionette, $, _){

    Home.JumboTronView = Marionette.LayoutView.extend({
        template: 'home/jumbotron',
        className: function() {
            var classes = [
                'jumbotron'
            ];

            if(App.userSettings.get('homeClockCollapsed')) {
                classes.push('closed');
            }

            return classes.join(' ');
        },

        regions: {
            'clock': '.clock-region'
        },

        events: {
            'click .toggle-link': 'triggerToggle' 
        },

        initialize: function() {
            this.collapsed = App.userSettings.get('homeClockCollapsed') || false;
        },

        serializeData: function() {
            return {
                collapsed: this.collapsed
            };
        },

        onBeforeShow: function() {
            this.clock.show(new App.Views.Clock({
                tagName: 'h1',
                model: App.masterClock
            }));
        },

        triggerToggle: function() {
            var collapsed = this.collapsed;

            if(collapsed) {
                this.$el.removeClass('closed');
            } else {
                this.$el.addClass('closed');
            }

            this.collapsed = !collapsed;
            App.userSettings.save('homeClockCollapsed', !collapsed);
        }
    });


    Home.NodeView = Marionette.ItemView.extend({
        template: 'home/node',

        attributes: function() {
            return {
                'data-id': this.model.get('id')
            }
        },

        className: function() {
            var classes = [
                'node', 'node-slim'
            ];

            if(this.model.get('active')) {
                var earthRem = this.model.get('earth_time_remaining');
                
                if(earthRem.minutes <= 1) {
                    classes.push('urgent');
                } else if(earthRem.minutes <= 6) {
                    classes.push('warning');
                }
            }

            if(this.model.get('selected')) {
                classes.push('selected');
            }

            return classes.join(' ');
        },

        initialize: function() {
            var self = this;

            this.listenTo(this.model, 'change', function() {
                if(this.model.get('active')) {
                    this.render();
                }
            });

            this.$el.on('click', _.bind(this.toggleSelect, this));
        },

        toggleSelect: function() {
            var selected = this.model.get('selected') || false;

            this.model.set('selected', !selected);
            this.$el.toggleClass('selected');
            if(!selected) {
                App.vent.trigger('node:selected', this.model);
            } else {
                App.vent.trigger('node:deselected', this.model);
            }
        },

        onBeforeDestroy: function() {
            this.$el.off();
        }
    });

    Home.NodeList = Marionette.CollectionView.extend({
        childView: Home.NodeView
    });

    Home.BaseView = Marionette.LayoutView.extend({
        template: 'home/home',
        className: 'home',

        regions: {
            'jumbotron': '.jumbotron-region',
            'activeNodes': '.active-nodes-region',
            'nextHourNodes': '.next-hour-nodes-region',
            'twoHourNodes': '.two-hour-nodes-region',
            'otherNodes': '.other-nodes-region'
        },

        initialize: function() {
            var self = this;

            this._currentHour = App.masterClock.get('hour');

            this.sortCollections();

            // only update lists every hour for performance
            // let individual views (when active) handle countdowns.
            this.listenTo(App.masterClock, 'change', function() {
                // be sure to check for race-conditioned nodes that missed the last hour rollover
                if(self._currentHour !== App.masterClock.get('hour') || self.collections.active.where({ active: false }).length ) {
                    self._currentHour = App.masterClock.get('hour');
                    self.sortCollections();
                    self.showLists();
                }
            });

        },

        sortCollections: function() {
            var self = this,
                data = [],
                active = [], oneHour = [], twoHour = [], theRest = [],
                watchedNodes = App.collections.watched,
                collections = [
                    App.collections.botany,
                    App.collections.mining,
                    App.collections.custom
                ];

            this.collections = {
                active: new Backbone.Collection(),
                one_hour: new Backbone.Collection(),
                two_hour: new Backbone.Collection(),
                the_rest: new Backbone.Collection()
            };
            
            _.each(collections, function(coll) {
                coll.each(function(model) {
                    var item = model.toJSON(),
                        isWatched = watchedNodes.get(item.id);

                    if(isWatched) {
                        model.set('selected', true);
                    }

                    if(item.active) {
                        return active.push(model);
                    }

                    var timeUntil = item.time_until,
                        hours = timeUntil.hours,
                        minutes = timeUntil.minutes;

                    if(hours === 0 && minutes > 0 || hours === 1) {
                        return oneHour.push(model);
                    }

                    if(hours === 1 && minutes > 0 || hours === 2) {
                        return twoHour.push(model);
                    }

                    return theRest.push(model);

                });

            });

            self.collections.active.add(active);
            self.collections.one_hour.add(oneHour);
            self.collections.two_hour.add(twoHour);
            self.collections.the_rest.add(theRest);
        },

        onBeforeShow: function() {
            var self = this;                

            // jumbotron master clock
            this.jumbotron.show(new Home.JumboTronView());
            this.showLists();
        },

        showLists: function() {
            this.activeNodes.show(new Home.NodeList({
                collection: this.collections.active
            }));

            this.nextHourNodes.show(new Home.NodeList({
                collection: this.collections.one_hour
            }));

            this.twoHourNodes.show(new Home.NodeList({
                collection: this.collections.two_hour
            }));

            this.otherNodes.show(new Home.NodeList({
                collection: this.collections.the_rest
            }));
        }
    });

    App.on('before:start', function() {
        App.commands.setHandler('show:home', function() {
            App.mainRegion.show(new Home.BaseView());
        });
    });

});