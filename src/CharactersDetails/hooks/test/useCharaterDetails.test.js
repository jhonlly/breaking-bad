import {describe, it, expect, vi} from 'vitest';
import '@testing-library/jest-dom';
import { renderHook, act } from '@testing-library/react-hooks';
import useCharacterDetails from '../useCharacterDetails';
import { mockCharacter, mockQuote } from './mockProfile';

describe('useCharacterDetails', () => {

    const getCharactersResponse = vi.fn().mockResolvedValue({
        json: () => mockCharacter,
    });
    const getQuoteResponse = vi.fn().mockResolvedValue({
        json: () => [mockQuote],
    });

    const repository = {
        getDetails: vi.fn(() => getCharactersResponse()),
        getRandomQuote: vi.fn(() => getQuoteResponse()),
    };


    it('Should be not empty character', async () => {
        const { result } = renderHook(() =>  useCharacterDetails(repository));
        
        await act( async () => {
            await result.current.fetchCharactersDetails(1);
        });

        const { details, quote, error, loading } = result.current;
  
        expect(details).toEqual(mockCharacter[0]);
        expect(quote).toEqual([mockQuote]);
        expect(error).toBeNull();
        expect(loading).toBe(false);

    });

    it('Should be error', async () => {
            
        const getCharacterResponse = vi.fn().mockRejectedValue(new Error('Error'));
    
        const repositoryWithError = {
            getDetails: vi.fn(() => getCharacterResponse()),
        };
        const { result } = renderHook(() =>  useCharacterDetails(repositoryWithError));
            
   
        await act( async () => {
            await result.current.fetchCharactersDetails(1);
        });
    
        const { details, quote,  error, loading } = result.current;
    
        expect(details).toEqual({});
        expect(quote).toEqual({});
        
        expect(error.message).toBe('Error');
        expect(loading).toBe(false);
    
    });

});