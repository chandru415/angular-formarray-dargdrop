import { gridInitialState, gridReducer } from "./grid-list.reducer";

describe('GridList Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = gridReducer(gridInitialState, action);

      expect(result).toBe(gridInitialState);
    });
  });
});
