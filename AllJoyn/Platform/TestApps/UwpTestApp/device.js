
var fakeDelay = 1000;

module.exports = {
    device: null,
    _brightness: 0,

    initDevice: function(dev) {
        console.log("initDevice called...");
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                this.device = dev;
                this._logDeviceState();
                console.log("initDevice completed.");
                resolve();
            }, fakeDelay);
        });
    },

    turnOn: function() {
        console.log("turnOn called...");
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                this._brightness = 100;
                this._logDeviceState();
                console.log("turnOn completed.");
                resolve();
            }, fakeDelay);
        });
    },

    turnOff: function() {
        console.log("turnOff called.");
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                this._brightness = 0;
                this._logDeviceState();
                console.log("turnOff completed.");
                resolve();
            }, fakeDelay);
        });
    },

    getBrightness: function() {
        console.log("getBrightness() called...");
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                this._logDeviceState();
                console.log("getBrightness completed: " + this._brightness);
                resolve(this._brightness);
            }, fakeDelay);
        });
    },

    setBrightness: function(value) {
        console.log("setBrightness(" + value + ") called...");
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                this._brightness = value;
                this._logDeviceState();
                console.log("setBrightness completed.");
                resolve();
            }, fakeDelay);
        });
    },

    _logDeviceState: function () {
        console.log("  device.name          : " + this.device.name);
        console.log("  device.props         : " + this.device.props);
    }
}
