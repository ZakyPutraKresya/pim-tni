import { create } from 'zustand';

const useDropdownStore = create((set) => ({
  dropdowns: {},
  toggleDropdown: (dropdownName) =>
    set((state) => ({
      dropdowns: {
        ...state.dropdowns,
        [dropdownName]: !state.dropdowns[dropdownName],
      },
    })),
  closeAllDropdowns: (currentDropdown) =>
    set((state) => ({
      dropdowns: Object.keys(state.dropdowns).reduce((acc, dropdownName) => {
        acc[dropdownName] = dropdownName === currentDropdown ? true : false;
        return acc;
      }, {}),
    })),
  addDropdown: (dropdownName) =>
    set((state) => ({
      dropdowns: {
        ...state.dropdowns,
        [dropdownName]: false,
      },
    })),
}));

export default useDropdownStore;
