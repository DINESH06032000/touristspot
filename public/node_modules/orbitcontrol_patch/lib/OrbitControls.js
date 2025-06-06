import {
    OrbitControlsModel,
    OrbitControlsView
} from 'jupyter-threejs';

export var OrbitControlsModel2 = OrbitControlsModel.extend({

    setupListeners: function () {
        OrbitControlsModel.prototype.setupListeners.call(this);
        console.log("OrbitControls update");
        this.obj.update()
    }
});

export const OrbitControlsView2 = OrbitControlsView;
