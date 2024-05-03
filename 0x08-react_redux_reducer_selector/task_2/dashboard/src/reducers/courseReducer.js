import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from "../actions/courseActionTypes";

const initialState = []

const courseReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_COURSE_SUCCESS:
            const courses = action.data.map(course => ({
                ...course,
                isSelected: false
            }));
            return courses;

        case SELECT_COURSE:
            return state.map(course => {
                if (course.id === action.index) {
                    return {
                        ...course,
                        isSelected: true
                    };
                }
                return course;
            });

        case UNSELECT_COURSE:
            return state.map(course => {
                if (course.id === action.index) {
                    return {
                        ...course,
                        isSelected: false
                    };
                }
                return course;
            });

        default:
            return state;
    }
}

export default courseReducer;
