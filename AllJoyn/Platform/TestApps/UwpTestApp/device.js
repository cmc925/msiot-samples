
var device = null;
var brightness = 0;
var fakeDelay = 1000;

function logDeviceState() {
    console.log("  device.name          : " + device.name);
    console.log("  device.props         : " + device.props);
}


module.exports = {
    initDevice: function (dev) {
        console.log("initDevice called...");
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                device = dev;
                logDeviceState();
                console.log("initDevice completed.");
                resolve();
            }, fakeDelay);
        });
    },

    turnOn: function () {
        console.log("turnOn called...");
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                brightness = 100;
                logDeviceState();
                console.log("turnOn completed.");
                resolve();
            }, fakeDelay);
        });
    },

    turnOff: function () {
        console.log("turnOff called.");
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                brightness = 0;
                logDeviceState();
                console.log("turnOff completed.");
                resolve();
            }, fakeDelay);
        });
    },

    getBrightness: function () {
        console.log("getBrightness called...");
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                logDeviceState();
                console.log("getBrightness completed: " + brightness);
                resolve(brightness);
            }, fakeDelay);
        });
    },

    setBrightness: function (value) {
        console.log("setBrightness(" + value + ") called...");
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                brightness = value;
                logDeviceState();
                console.log("setBrightness completed.");
                resolve();
            }, fakeDelay);
        });
    }
}
