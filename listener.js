
  // add a document listener
  document.addEventListener('olst-default_handler-errors', function (event) {
    // Get the content of the event
    console.log('Event listened');
    smoothGoTo('#' + event.data.errors[Object.keys(event.data.errors).sort(function (itemA, itemB) {
      return event.data.errors[itemA].weight - event.data.errors[itemB].weight
    })[0]].id)
  }, false);

  /**
   * smoothGoTo
   * @param {string} domSelector
   */
  function smoothGoTo(domSelector = 'body') {
    console.log('Need to scroll to ' + domSelector)
    document.querySelector(domSelector).scrollIntoView({
      block: 'start',
      behavior: 'smooth'
    });
  };
