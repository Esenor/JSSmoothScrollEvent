  /**
   * dispatchErrorAt
   * @param {string} domSelector
   */
  function dispatchError() {
    // Create data error
    var errorsEvent = {
      errors: {
        'id_html_field_D': {
          id: 'D',
          data: ['error message'],
          weight: 200,
          source: 'productFormEngine'
        },
        'id_html_field_C': {
          id: 'C',
          data: [],
          weight: 100,
          source: 'customerAccount'
        }
      }
    };
    // Create event
    var errorEvent = document.createEvent('Event');
    errorEvent.initEvent('olst-default_handler-errors', true, true);
    // set data in the event
    errorEvent.data = errorsEvent;
    // dispatch the event
    console.log('Dispatch event in 800ms', errorsEvent);
    setTimeout(function () {
      console.log('Dispatching the event');
      document.dispatchEvent(errorEvent);
    }, 800)
    return 'Dispatch event after 800ms';
  }