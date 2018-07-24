import redchain from 'util/store';

describe('reducer', () => {
  it('is the reducer correctly called', () => {
    const reducerSpy = jasmine.createSpy('reducer', (originalState: number, action: number) => {
      return originalState + action;
    }).and.callThrough();

    const store = redchain(1, reducerSpy);

    expect(reducerSpy.calls.count()).toBe(0);

    expect((store as any).state).toBe(1);

    store.dispatch(2);

    expect(reducerSpy.calls.count()).toBe(1);
    expect(reducerSpy).toHaveBeenCalledWith(1, 2);
    expect((store as any).state).toBe(3);
  });

  it('eventlisteners are called when change happened', () => {
    const reducerSpy = jasmine.createSpy('reducer', (originalState: number, action: number) => {
      originalState;
      return action;
    }).and.callThrough();

    const firstEventListenerSpy = jasmine.createSpy('eventlistener', () => {});
    const secondEventListenerSpy = jasmine.createSpy('eventlistener', () => {});

    const action = {};

    const store = redchain(null, reducerSpy);
    store.addOnChange(firstEventListenerSpy);
    store.addOnChange(secondEventListenerSpy);

    expect((store as any).state).toBe(null);
    expect(firstEventListenerSpy.calls.count()).toBe(0);
    expect(secondEventListenerSpy.calls.count()).toBe(0);

    store.dispatch(action);

    expect((store as any).state).toBe(action);
    expect(firstEventListenerSpy.calls.count()).toBe(1);
    expect(secondEventListenerSpy.calls.count()).toBe(1);
    expect(firstEventListenerSpy).toHaveBeenCalledWith(action);
    expect(secondEventListenerSpy).toHaveBeenCalledWith(action);
  });

  it('eventlisteners are not called when no change happened', () => {
    const reducerSpy = jasmine.createSpy('reducer', (originalState: number, action: number) => {
      originalState;
      return action;
    }).and.callThrough();

    const firstEventListenerSpy = jasmine.createSpy('eventlistener', () => {});
    const secondEventListenerSpy = jasmine.createSpy('eventlistener', () => {});

    const action = {};
    const store = redchain(action, reducerSpy);
    store.addOnChange(firstEventListenerSpy);
    store.addOnChange(secondEventListenerSpy);

    expect((store as any).state).toBe(action);
    expect(firstEventListenerSpy.calls.count()).toBe(0);
    expect(secondEventListenerSpy.calls.count()).toBe(0);

    store.dispatch(action);

    expect((store as any).state).toBe(action);
    expect(firstEventListenerSpy.calls.count()).toBe(0);
    expect(secondEventListenerSpy.calls.count()).toBe(0);
  });

  it('eventlisteners are not called when no change happened', () => {
    const reducerSpy = jasmine.createSpy('reducer', (originalState: number, action: number) => {
      originalState;
      return action;
    }).and.callThrough();

    const firstEventListenerSpy = jasmine.createSpy('eventlistener', () => {});
    const secondEventListenerSpy = jasmine.createSpy('eventlistener', () => {});

    const action = {};
    const store = redchain(action, reducerSpy);
    store.addOnChange(firstEventListenerSpy);
    store.addOnChange(secondEventListenerSpy);

    expect((store as any).state).toBe(action);

    expect(firstEventListenerSpy.calls.count()).toBe(0);
    expect(secondEventListenerSpy.calls.count()).toBe(0);

    store.dispatch(action);

    expect((store as any).state).toBe(action);
    expect(firstEventListenerSpy.calls.count()).toBe(0);
    expect(secondEventListenerSpy.calls.count()).toBe(0);
  });

  it('eventlistener removed even while dispatched', () => {
    const reducerSpy = jasmine.createSpy('reducer', (originalState: number, action: number) => {
      originalState;
      return action;
    }).and.callThrough();

    const firstEventListenerSpy = jasmine.createSpy('eventlistener', () => {
      store.removeOnChange(secondEventListenerSpy);
    }).and.callThrough();
    const secondEventListenerSpy = jasmine.createSpy('eventlistener', () => {});

    const action = {};

    const store = redchain(null, reducerSpy);
    store.addOnChange(firstEventListenerSpy);
    store.addOnChange(secondEventListenerSpy);

    expect((store as any).state).toBe(null);
    expect(firstEventListenerSpy.calls.count()).toBe(0);
    expect(secondEventListenerSpy.calls.count()).toBe(0);

    store.dispatch(action);

    expect((store as any).state).toBe(action);
    expect(firstEventListenerSpy.calls.count()).toBe(1);
    expect(secondEventListenerSpy.calls.count()).toBe(0);
    expect(firstEventListenerSpy).toHaveBeenCalledWith(action);
  });

  it('eventlistener removed even while dispatched', () => {
    const reducerSpy = jasmine.createSpy('reducer', (originalState: number, action: number) => {
      originalState;
      return action;
    }).and.callThrough();

    const firstEventListenerSpy = jasmine.createSpy('eventlistener', () => {
      store.removeOnChange(firstEventListenerSpy);
    }).and.callThrough();
    const secondEventListenerSpy = jasmine.createSpy('eventlistener', () => {});

    const action = {};

    const store = redchain(null, reducerSpy);
    store.addOnChange(firstEventListenerSpy);
    store.addOnChange(secondEventListenerSpy);

    expect((store as any).state).toBe(null);
    expect(firstEventListenerSpy.calls.count()).toBe(0);
    expect(secondEventListenerSpy.calls.count()).toBe(0);

    store.dispatch(action);

    expect((store as any).state).toBe(action);
    expect(firstEventListenerSpy.calls.count()).toBe(1);
    expect(secondEventListenerSpy.calls.count()).toBe(1);
    expect(firstEventListenerSpy).toHaveBeenCalledWith(action);
  });

  it('eventlistener removed even while dispatched', () => {
    const reducerSpy = jasmine.createSpy('reducer', (originalState: number, action: number) => {
      originalState;
      return action;
    }).and.callThrough();

    const zeroEventListenerSpy = jasmine.createSpy('eventlistener', () => {});
    const firstEventListenerSpy = jasmine.createSpy('eventlistener', () => {
      store.removeOnChange(firstEventListenerSpy);
    }).and.callThrough();
    const secondEventListenerSpy = jasmine.createSpy('eventlistener', () => {});

    const action = {};

    const store = redchain(null, reducerSpy);
    store.addOnChange(zeroEventListenerSpy);
    store.addOnChange(firstEventListenerSpy);
    store.addOnChange(secondEventListenerSpy);

    expect((store as any).state).toBe(null);
    expect(zeroEventListenerSpy.calls.count()).toBe(0);
    expect(firstEventListenerSpy.calls.count()).toBe(0);
    expect(secondEventListenerSpy.calls.count()).toBe(0);

    store.dispatch(action);

    expect((store as any).state).toBe(action);
    expect(zeroEventListenerSpy.calls.count()).toBe(1);
    expect(firstEventListenerSpy.calls.count()).toBe(1);
    expect(secondEventListenerSpy.calls.count()).toBe(1);
    expect(firstEventListenerSpy).toHaveBeenCalledWith(action);
  });

  it('flush all changelisteners', () => {
    const store = redchain(0, (state, action: number) => {
      state;
      return action;
    });

    const listenerSpy = jasmine.createSpy('listener', () => null);

    store.addOnChange(listenerSpy);

    store.flush();

    store.dispatch(1);

    expect(listenerSpy.calls.count()).toBe(0);
  });
});
