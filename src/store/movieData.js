import { create } from 'zustand';

const useMovieStore = create((set) => ({
  movie: [],
  setMovie: (movie) => set({ movie }),
}));

export default useMovieStore;
