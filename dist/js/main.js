window.TIME_HELPERS = (function() {
    var api = {
        getEorzeaTime: function() {
            var eorzeaMultipler = (3600 / 175) * 1000;

            var universalTime = moment().unix(),
                eorzeaTime = universalTime * eorzeaMultipler;

            return eorzeaTime;
        },

        getEarthDurationfromEorzean: function(stringDuration) {
            // 175 earth seconds = 3600 eorzean seconds (1 hour)
            var time = {
                    hours: parseFloat(stringDuration.split(':')[0]),
                    minutes: parseFloat(stringDuration.split(':')[1])
                },
                totalMins = (time.hours * 60) + time.minutes,
                totalSeconds = totalMins * 60;

            // how many multiples of 175 (eorz hours) we have.
            var earthUnits = totalSeconds / 3600;

            var totalEarthSeconds = earthUnits * 175,
                minutes = Math.floor(totalEarthSeconds / 60),
                hours = Math.floor(minutes / 60),
                seconds = Math.ceil(((totalEarthSeconds / 60) - minutes) * 60);

            if (minutes > 60) {
                var diff = Math.floor(minutes / 60);
                minutes = minutes - (diff * 60);
            }

            return {
                hours: hours,
                minutes: minutes,
                seconds: seconds
            };
        },

        /**
         *   Expects two string times with meridien,
         *   IE: 8:00 AM, 7:00 PM
         *   B will be compared against A, like in subtraction.
         *   ex1: A: 12:00 AM B: 11:00 PM = 23 hour difference.
         *   ex2: A: 11:00 PM B: 12:00 AM = 1 hour difference.
         */
        getTimeDifference: function(a, b) {
            var self = this,
                hours = 0,
                minutes = 0,
                times = {};

            _.each([a, b], function(time, idx) {
                times[idx] = self.getTimeObjFromString(time);
            });

            var timeA = times['0'],
                timeB = times['1'],
                diff = timeB.hour - timeA.hour;

            hours = diff > 12 ? diff - 12 : diff;
            hours > 24 ? hours - 24 : hours;

            minutes = timeB.minute - timeA.minute;

            if (hours < 0) {
                hours = hours + 24
            } else if (hours === 24) {
                hours = 0;
            }

            if (minutes < 0) {
                minutes = minutes + 60;
                if (hours === 1) {
                    hours = 0;
                }
            }

            return {
                hours: hours,
                minutes: minutes
            };
        },

        // Expects format: 12:00 AM
        getTimeObjFromString: function(stringTime) {
            var time = stringTime,
                isAM = time.indexOf('AM') > -1,
                hour = parseFloat(time.split(' ')[0].split(':')[0]);

            if (isAM && hour === 12) {
                hour = 0;
            } else if (!isAM && hour !== 12) {
                hour += 12;
            }

            return {
                hour: hour,
                minute: parseFloat(time.split(' ')[0].split(':')[1])
            };
        },

        // Expect object formatted from getTimeObjFromString
        getTimeStringFromObject: function(timeObj) {
            var hour = timeObj.hour,
                minute = timeObj.minute,
                meridien = 'AM';

            if (hour > 12) {
                meridien = 'PM';
                hour = hour - 12;
            }

            minute = minute < 10 ? '0' + minute : minute;

            return hour + ':' + minute + ' ' + meridien;
        },

        getTimeStringFromDuration: function(stringStartTime, stringDuration) {
            var startTime = this.getTimeObjFromString(stringStartTime),
                duration = {
                    hour: parseFloat(stringDuration.split(':')[0]),
                    minute: parseFloat(stringDuration.split(':')[1])
                },
                end = {};

            var hour = startTime.hour + duration.hour,
                minute = startTime.minute + duration.minute;

            if (minute > 60) {
                hour++;
                minute -= 60;
            }

            if (hour > 24) {
                hour -= 24;
            }

            if (hour > 12) {
                hour -= 12;
                end.meridien = 'PM';
            } else {
                end.meridien = 'AM';
            }

            end.hour = hour;
            end.minute = minute < 10 ? '0' + minute : minute;

            return end.hour + ':' + end.minute + ' ' + end.meridien;
        },

        getDurationObjectFromString: function(duration) {
            return {
                hours: parseFloat(duration.split(':')[0]),
                minutes: parseFloat(duration.split(':')[1])
            }
        },

        getDurationStringFromObject: function(durationObj) {
            var mins = durationObj.minutes;

            if(mins < 10) {
                mins = '0' + mins;
            }

            return durationObj.hours + ':' + mins;
        }
    };

    return api;
})();
$(function() {

    if(typeof App !== 'undefined') {
        App.start();
    }

});