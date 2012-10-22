var perfTime = module.exports = function(provider) {
    this.n = 0;
    this.d = null;
    this.t = null;
    this.provider = provider || Date.now;
    this._reset = this.reset.bind(this);
};
perfTime.prototype.get = function() {
    if (this.n) { this.n--; return this.d; }
    this.n = 1000;
    this.t || (this.t = setTimeout(this._reset, 1));
    return this.d = this.provider();
};
perfTime.prototype.reset = function() {
    this.n = 0;
    this.d = null;
    this.t = null;
};