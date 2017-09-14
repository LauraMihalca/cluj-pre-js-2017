describe('constructId', () => {
    it('should be a function', () => {
        chai.expect(constructId).to.be.a('function');
    });
});

describe('constructId', () => {
    it('should return a string with no spaces or commas', () => {
        chai.expect(constructId('Lastname Firstname')).to.equal('LastnameFirstname');
    });
});
