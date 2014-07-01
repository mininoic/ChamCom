describe('menuSearch', function() {

	beforeEach(module('ChamCom'));

	it('should ...', inject(function($filter) {

        var filter = $filter('menuSearch');

		expect(filter('input')).toEqual('output');

	}));

});