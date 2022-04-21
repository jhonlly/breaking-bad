import { renderHook } from '@testing-library/react-hooks';
import useCharactersList from './useCharactersList';
import '@testing-library/jest-dom';
describe('useCounter', () => {
    it('should increment counter', () => {
        const { result } = renderHook(() =>  useCharactersList({ limit: 10, offset: 0 }));
        const { characters } = result.current;
        expect(characters).toEqual([]);     
    });
});