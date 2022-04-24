import {describe, it, expect, vi} from 'vitest';
import '@testing-library/jest-dom';
import { renderHook, act } from '@testing-library/react-hooks';
import useCharactersList from './useCharactersList';
import mockCharacters from './mockData';

describe('useCharacterList', () => {

    it('Should be empty list', () => {
        const { result,  } = renderHook(() =>  useCharactersList({ limit: 10, offset: 0 }));
        const { characters } = result.current;
        expect(characters).toEqual([]);
        expect(result.current.loading).toBe(false);
        expect(result.current.error).toBeNull();
    });

    it('Should be not empty list', async () => {

        const getCharactersResponse = vi.fn().mockResolvedValue({
            json: () => mockCharacters,
        });

        const repository = {
            getCharacters: vi.fn(() => getCharactersResponse()),
        };
        const { result } = renderHook(() =>  useCharactersList({repository}));
        
        expect(result.current.characters).toEqual([]);

        await act( async () => {
            await result.current.fetchCharacters({limit: 10, offset: 0});
        });

        const { characters, error, loading } = result.current;

        expect(characters).toEqual(mockCharacters);
        expect(error).toBeNull();
        expect(loading).toBe(false);

    });


});