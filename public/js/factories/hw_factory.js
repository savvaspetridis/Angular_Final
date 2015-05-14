app.factory('Homework', function() {
    var data = [
        { assignment: 'Test First JavaScript',
          url: 'https://github.com/savvaspetridis/FullstackTestFirst',
          status: 'completed'  },
        { assignment: 'Flashcards Day 1',
          url: 'https://github.com/savvaspetridis/flashcards-day1',
          status: 'completed' },
        { assignment: 'Flashcards Day 2',
          url: 'https://github.com/savvaspetridis/flash-cards',
          status: 'completed' },
        { assignment: 'Final',
          url: 'https://github.com/savvaspetridis/Angular_Final',
          status: 'completed' } ];
    return data;
});