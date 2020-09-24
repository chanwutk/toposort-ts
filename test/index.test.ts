import { toposort } from '../src/index';

test('empty', () => expect(toposort([], () => 0).length).toBe(0));
