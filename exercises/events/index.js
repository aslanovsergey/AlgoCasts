// --- Directions
// Create an 'eventing' library out of the
// Events class.  The Events class should
// have methods 'on', 'trigger', and 'off'.

class Events {
  constructor() {
    this.handlers = new Map();
  }

  // Register an event handler
  on(eventName, callback) {
    this.handlers[eventName] = [...(this.handlers[eventName] || []), callback];
  }

  // Trigger all callbacks associated
  // with a given eventName
  trigger(eventName) {
    const eventHandlers = this.handlers[eventName];
    if (eventHandlers) {
      eventHandlers.forEach((e) => e());
    }
  }

  // Remove all event handlers associated
  // with the given eventName
  off(eventName) {
    this.handlers[eventName] = undefined
  }
}

module.exports = Events;
