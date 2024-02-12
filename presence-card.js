class PresenceCard extends HTMLElement {

    render() {
        // console.log("render")

        if (this._hass.states[this.target1y].state > 0) {
            const target = this.querySelector("#target1");
            target.style.display = 'block';
            target.style.top = `${this.invertX * this._hass.states[this.target1x].state / this.roomX / 10}%`;
            target.style.left = `${this._hass.states[this.target1y].state / this.roomY / 10}%`;
        } else {
            const target = this.querySelector("#target1");
            target.style.display = 'none';
        }
        if (this._hass.states[this.target2y].state > 0) {
            const target = this.querySelector("#target2");
            target.style.display = 'block';
            target.style.top = `${this.invertX * this._hass.states[this.target2x].state / this.roomX / 10}%`;
            target.style.left = `${this._hass.states[this.target2y].state / this.roomY / 10}%`;
        } else {
            const target = this.querySelector("#target2");
            target.style.display = 'none'
        }
        if (this._hass.states[this.target3y].state > 0) {
            const target = this.querySelector("#target3");
            target.style.display = 'block';
            target.style.top = `${this.invertX * this._hass.states[this.target3x].state / this.roomX / 10}%`;
            target.style.left = `${this._hass.states[this.target3y].state / this.roomY / 10}%`;
        } else {
            const target = this.querySelector("#target3");
            target.style.display = 'none';
        }
    }
    
    set hass(hass) {
        //console.log("hass");
        this._hass = hass;
    }

    connectedCallback() {
        //console.log("connectedCallback");
    
        const image = new Image();
        image.src = this.imageLoc;

        // Wait for the image to load
        image.onload = () => {
            const relation = (image.naturalHeight/image.naturalWidth)*100
            
            //console.log(image.naturalHeight, image.naturalWidth);

            this.innerHTML = `
                <style>
                    #presenceCardContainer {
                        overflow: hidden;
                        background-size: cover;
                        background-image: url(${this.imageLoc});
                        background-position: center;
                        padding-top: ${relation}%;
                    }
                    #sensorContainer {
                        position: absolute;
                        top: ${this.sensorY / this.roomY * 100}%;
                        left: ${this.sensorX / this.roomX * 100}%;
                        width: 100%;
                        height: 100%;
                        transform-origin: top left;
                        transform: rotate(${this.sensorRot}deg);
                    }
                    #orientation {
                        position: absolute;
                        overflow: visible;
                        width: 1px; 
                        height: 1px;
                        transform: scale(4);
                    }
                    .target {
                        position: absolute;
                        width: 32px;
                        height: 32px;
                        border: 5px solid;
                        border-radius: 50%;
                        box-sizing: border-box;
                        transform: translate(-50%, -50%);
                        transition: top 0.25s linear, left 0.25s linear;
                    }
                    .zone {
                        position: absolute;
                        border: 5px solid;
                        border-radius: 10px;
                        align-items: center;
                        justify-content: center;
                        box-sizing: border-box;
                        display: flex
                    }
                    #zone1 {
                        border-color: #a9521b;
                        background: #89602121;
                        height: ${this.zone1sx != null ? (this._hass.states[this.zone1ex].state - this._hass.states[this.zone1sx].state) / this.roomX / 10 : 0}%;
                        width: ${this.zone1sx != null ? (this._hass.states[this.zone1ey].state - this._hass.states[this.zone1sy].state) / this.roomY / 10 : 0}%;
                        top: ${this.zone1sx != null ? this.invertX == false ? this._hass.states[this.zone1sx].state / this.roomX / 10 : -this._hass.states[this.zone1ex].state / this.roomX / 10 : 0}%;
                        left: ${this.zone1sx != null ? this._hass.states[this.zone1sy].state / this.roomY / 10 : 0}%;
                        display: ${this.zone1sx != null ? "flex" : "none"};
                    }
                    #zone2 {
                        border-color: #218924;
                        background: #21892421;
                        height: ${this.zone2sx != null ? (this._hass.states[this.zone2ex].state - this._hass.states[this.zone2sx].state) / this.roomX / 10 : 0}%;
                        width: ${this.zone2sx != null ? (this._hass.states[this.zone2ey].state - this._hass.states[this.zone2sy].state) / this.roomY / 10 : 0}%;
                        top: ${this.zone2sx != null ? this.invertX == false ? this._hass.states[this.zone2sx].state / this.roomX / 10 : -this._hass.states[this.zone2ex].state / this.roomX / 10 : 0}%;
                        left: ${this.zone2sx != null ? this._hass.states[this.zone2sy].state / this.roomY / 10 : 0}%;
                        display: ${this.zone2sx != null ? "flex" : "none"};
                    }
                    #zone3 {
                        border-color: #4f2a81;
                        background: #7a218921;
                        height: ${this.zone3sx != null ? (this._hass.states[this.zone3ex].state - this._hass.states[this.zone3sx].state) / this.roomX / 10 : 0}%;
                        width: ${this.zone3sx != null ? (this._hass.states[this.zone3ey].state - this._hass.states[this.zone3sy].state) / this.roomY / 10 : 0}%;
                        top: ${this.zone3sx != null ? this.invertX == false ? this._hass.states[this.zone3sx].state / this.roomX / 10 : -this._hass.states[this.zone3ex].state / this.roomX / 10 : 0}%;
                        left: ${this.zone3sx != null ? this._hass.states[this.zone3sy].state / this.roomY / 10 : 0}%;
                        display: ${this.zone3sx != null ? "flex" : "none"};
                    }
                    #zone4 {
                        border-color: #1b3ea9;
                        background: #21458921;
                        height: ${this.zone4sx != null ? (this._hass.states[this.zone4ex].state - this._hass.states[this.zone4sx].state) / this.roomX / 10 : 0}%;
                        width: ${this.zone4sx != null ? (this._hass.states[this.zone4ey].state - this._hass.states[this.zone4sy].state) / this.roomY / 10 : 0}%;
                        top: ${this.zone4sx != null ? this.invertX == false ? this._hass.states[this.zone4sx].state / this.roomX / 10 : -this._hass.states[this.zone4ex].state / this.roomX / 10 : 0}%;
                        left: ${this.zone4sx != null ? this._hass.states[this.zone4sy].state / this.roomY / 10 : 0}%;
                        display: ${this.zone4sx != null ? "flex" : "none"};
                    }
                </style>
                <ha-card id="presenceCardContainer">
                    <div id="sensorContainer">
                        <div class="zone" id="zone1">
                            <div style="transform: rotate(${-this.sensorRot}deg) scale(1.5);">Zone 1</div>
                        </div>
                        <div class="zone" id="zone2">
                            <div style="transform: rotate(${-this.sensorRot}deg) scale(1.5);">Zone 2</div>
                        </div>
                        <div class="zone" id="zone3">
                            <div style="transform: rotate(${-this.sensorRot}deg) scale(1.5);">Zone 3</div>
                        </div>
                        <div class="zone" id="zone4">
                            <div style="transform: rotate(${-this.sensorRot}deg) scale(1.5);">Zone 4</div>
                        </div>
                        <svg id="orientation">
                            <path id="path870" style="fill:#329420;fill-opacity:0.462745;stroke:#ebebeb;stroke-width:1;stroke-linecap:round;stroke-linejoin:round"
                            d="M 7.884412,-14.710865 A 16.987328,16.987328 0 0 1 16.378076,5.9219e-4 16.987328,16.987328 0 0 1 7.884412,14.712049 L -0.60925159,5.9219e-4 Z" />
                            <path id="path846" style="fill:#ebebeb;stroke:#ebebeb;stroke-width:1;stroke-linecap:round;stroke-linejoin:round"
                            d="M 1.398982,2.6298402 C -3.678719,5.5614521 -3.15501,5.8638161 -3.1550097,5.9219e-4 c 3e-7,-5.86322399 -0.5237088,-5.56086099 4.5539919,-2.62924799 5.0777008,2.93161199 5.0777008,2.32688499 -2e-7,5.258496 z" />
                        </svg>
                        <div class="target" id="target1" style="background-color: #d38b63;"></div>
                        <div class="target" id="target2" style="background-color: #75b148;"></div>
                        <div class="target" id="target3" style="background-color: #7548b1;"></div>
                    </div>
                </ha-card>
            `;
            
            this.invertX == false ? this.invertX = 1 : this.invertX = -1
            const cardElement = this.querySelector('#presenceCardContainer');

            // Update position every second
            this.intervalId = setInterval(() => {
                this.render();
            }, 250);
        };
    }

    disconnectedCallback() {
        //console.log("disconnectedCallback")
        clearInterval(this.intervalId);
    }

    setConfig(config) {
        //console.log("setConfig");
        if (!config.image) {
            throw new Error("You need to define a path for the background image");
        }
        if (config.roomX == null || config.roomY == null) {
            throw new Error("You need to define roomX and roomY");
        }
        if (config.sensorX == null || config.sensorY == null || config.sensorRot== null) {
            throw new Error("You need to define roomX, roomY and sensorRot");
        }

        this.invertX = config.invertX;
        this.target1x = config.target1x;
        this.target1y = config.target1y;
        this.target2x = config.target2x;
        this.target2y = config.target2y;
        this.target3x = config.target3x;
        this.target3y = config.target3y;

        this.zone1sx = config.zone1sx;
        this.zone1ex = config.zone1ex;
        this.zone1sy = config.zone1sy;
        this.zone1ey = config.zone1ey;
        this.zone1o = config.zone1o;

        this.zone2sx = config.zone2sx;
        this.zone2ex = config.zone2ex;
        this.zone2sy = config.zone2sy;
        this.zone2ey = config.zone2ey;
        this.zone2o = config.zone2o;

        this.zone3sx = config.zone3sx;
        this.zone3ex = config.zone3ex;
        this.zone3sy = config.zone3sy;
        this.zone3ey = config.zone3ey;
        this.zone3o = config.zone3o;

        this.zone4sx = config.zone4sx;
        this.zone4ex = config.zone4ex;
        this.zone4sy = config.zone4sy;
        this.zone4ey = config.zone4ey;
        this.zone4o = config.zone4o;

        this.imageLoc = config.image;
        this.roomX = config.roomX;
        this.roomY = config.roomY;
        this.sensorX = config.sensorX;
        this.sensorY = config.sensorY;
        this.sensorRot = config.sensorRot;

        this.connectedCallback()
    }

    static getStubConfig(ha) {
        //console.log("getEditorConfig");
        return {
            type: 'custom:presence-card',
            target1x: 'sensor.everything_presence_lite_target_1_x',
            target1y: 'sensor.everything_presence_lite_target_1_y',
            target2x: 'sensor.everything_presence_lite_target_2_x',
            target2y: 'sensor.everything_presence_lite_target_2_y',
            target3x: 'sensor.everything_presence_lite_target_3_x',
            target3y: 'sensor.everything_presence_lite_target_3_y',
            zone1sx: 'number.everything_presence_lite_zone_1_begin_x',
            zone1ex: 'number.everything_presence_lite_zone_1_end_x',
            zone1sy: 'number.everything_presence_lite_zone_1_begin_y',
            zone1ey: 'number.everything_presence_lite_zone_1_end_y',
            zone1o: 'binary_sensor.everything_presence_lite_zone_1_occupancy',
            zone2sx: 'number.everything_presence_lite_zone_2_begin_x',
            zone2ex: 'number.everything_presence_lite_zone_2_end_x',
            zone2sy: 'number.everything_presence_lite_zone_2_begin_y',
            zone2ey: 'number.everything_presence_lite_zone_2_end_y',
            zone2o: 'binary_sensor.everything_presence_lite_zone_2_occupancy',
            zone3sx: 'number.everything_presence_lite_zone_3_begin_x',
            zone3ex: 'number.everything_presence_lite_zone_3_end_x',
            zone3sy: 'number.everything_presence_lite_zone_3_begin_y',
            zone3ey: 'number.everything_presence_lite_zone_3_end_y',
            zone3o: 'binary_sensor.everything_presence_lite_zone_3_occupancy',
            zone4sx: 'number.everything_presence_lite_zone_4_begin_x',
            zone4ex: 'number.everything_presence_lite_zone_4_end_x',
            zone4sy: 'number.everything_presence_lite_zone_4_begin_y',
            zone4ey: 'number.everything_presence_lite_zone_4_end_y',
            zone4o: 'binary_sensor.everything_presence_lite_zone_4_occupancy',
            image: '/local/images/room.jpg',
            roomX: 3.84,
            roomY: 4.81,
            sensorX: 0,
            sensorY: 0,
            sensorRot: 45,
        };
    }
}

customElements.define("presence-card", PresenceCard);

window.customCards = window.customCards || [];
window.customCards.push({
    type: 'presence-card',
    name: 'Presence Card',
    description: 'A custom card that shows your location in the room.',
    preview: true,
});