var perfTime = module.exports = function(provider_or_rate, rate) {
    if (typeof provider_or_rate == 'function') {
      this.provider = provider_or_rate;
      this.r = rate ? ~~(rate/1000) : 100;
    } else {
      this.provider = Date.now;
      this.r = provider_or_rate ? ~~(provider_or_rate/1000) : 100;
    }
    if (!this.r) { this.get = this.provider; }; // disable caching for low rates
    this.n = 0;
    this.d = null;
    this.t = null;
    this._reset = this.reset.bind(this);
};
perfTime.prototype.get = function() {
    if (this.n) { this.n--; return this.d; }
    this.n = this.r;
    this.t || (this.t = setTimeout(this._reset, 1));
    return this.d = this.provider();
};
perfTime.prototype.reset = function() {
    this.n = 0;
    this.d = null;
    this.t = null;
};