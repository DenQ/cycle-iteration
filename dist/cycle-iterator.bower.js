var CycleIterator = function(mas) {
    this.mas = mas;
    this.generator = this._next();
};

CycleIterator.prototype._next = function* _next() {
    var i = 0;
    while(true) {
        if (i < this.mas.length) {
            i++;
            yield this.mas[i-1];
        } else {
            i = 0;
        }
    }
};

CycleIterator.prototype.next = function() {
    return this.generator.next().value;
};