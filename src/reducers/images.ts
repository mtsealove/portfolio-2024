import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ImageState {
    currentImage: string;
    currentNumber: number;
    images: string[];
    show: boolean;
    prevEnabled: boolean;
    nextEnabled: boolean;
}

const initialState: ImageState = {
  currentImage: '',
  currentNumber: -1,
  images: [],
  show: false,
  prevEnabled: false,
  nextEnabled: false,
};

export interface ShowPayload {
    // currentImage: string;
    currentNumber: number;
}

const updateState = (state: ImageState) => {
  state.currentImage = state.images[state.currentNumber];
  state.prevEnabled = state.currentNumber !== 0;
  state.nextEnabled = state.currentNumber < state.images.length - 1;
};

const imageSlice = createSlice({
  name: 'image',
  initialState,
  reducers: {
    setImages(state, payload: PayloadAction<string[]>) {
      state.images = payload.payload;
    },
    showImage(state, payload: PayloadAction<ShowPayload>) {
      state.currentNumber = payload.payload.currentNumber;
      updateState(state);
      state.show = true;
    },
    hideImage(state) {
      state.show = false;
    },
    prevImage(state) {
      if (state.currentNumber >= 1) {
        state.currentNumber -= 1;
        updateState(state);
      }
    },
    nextImage(state) {
      if (state.currentNumber < state.images.length - 1) {
        state.currentNumber += 1;
        updateState(state);
      }
    },
  },
});

const imageReducer = imageSlice.reducer;

export default imageReducer;

export const {
  setImages, showImage, hideImage, prevImage, nextImage,
} = imageSlice.actions;
