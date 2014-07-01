// Required to use Mininoic.Indexer to index the object first
// | search: {term: searchTerm, keys: ["key1"], notPrefixed: true}
// TODO: Vietnamese deep search
angular.module('Mininoic').filter('search', function(Indexer) {
	return function (items, option) {
		if (option) {
			var term;
			if (_.isString(option)) {
				term = option;
			} else if (option.term) {
				term = option.term;
			}
			if (term) {
				term = Indexer.unSign(term);
				var searchWords = term.split(' ');
				return _.filter(items, function (item) {
					var itemText = _.values(item).join(' ').toLowerCase();
					return _.every(searchWords, function (searchWord) {
						return itemText.search(searchWord.toLowerCase()) !== -1;
					});
				});
			}
		}
		return items;
	};
});