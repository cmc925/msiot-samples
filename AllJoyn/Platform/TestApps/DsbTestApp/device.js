
module.exports = {
    device: null,
    _brightness: 0,

    initDevice: function(dev) {
        console.log("Javascript initialized.");
        this._device = dev;
        this._logDeviceState();
    },

    turnOn: function() {
        console.log("turnOn called.");
        this._logDeviceState();
    },

    turnOff: function() {
        console.log("turnOff called.");
        this._logDeviceState();
    },

    _logDeviceState: function() {
        console.log("  device.name          : " + this.device.name);
        console.log("  device.props         : " + this.device.props);
    }
}

Object.defineProperty(module.exports, "brightness", {
    get: function () {
        console.log("getting brightness property: " + this._brightness);
        return this._brightness;
        this._logDeviceState();
    },
    set: function (value) {
        console.log("setting brightness property to: " + value);
        this._brightness = value;
        this._logDeviceState();
    }
});

