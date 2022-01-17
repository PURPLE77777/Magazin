import { ModalComponent } from "./consts.js";

export const mapStateToProps = (component) => {
    switch (component) {
        case ModalComponent: {
            return function (state) {
                return {
                    showModal: state.ModalReducer.showModal,
                    showSignIn: state.ModalReducer.showSignIn,
                    showLogIn: state.ModalReducer.showLogIn,
                };
            };
        }
        // case "Component_2": {
        //     return function (state) {
        //         return {
        //             value_2: state.value_2,
        //         };
        //     };
        // }
        default:
            return console.log("mapStateToProps >>", component);
    }
};
