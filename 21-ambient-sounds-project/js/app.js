import { sounds , defaultPresets } from "./soundData.js";
import { SoundManager } from "./soundManager.js";

class AmbientMixer{
    // Initialize dependencies and default state
    constructor(){
        console.log('Initializing state...')
        this.soundManager = new SoundManager()
        this.ui = null
        this.presetManager = null
        this.timer = null
        this.currentSoundState = {}
        this.isInitialized = false
    }

    init(){
        try {
            // Load all sound files
            this.loadAllSounds()

            // // Try to play rain
            // this.soundManager.setVolume('rain' , 30)
            // await this.soundManager.playSound('rain')

            this.isInitialized = true
        } catch (error) {
            console.error('Failed to initialized app: ',error)
        }
    }

    // Load all sound files
    loadAllSounds(){
        sounds.forEach((sound) => {
            const audioUrl = `audio/${sound.file}`;
            const success = this.soundManager.loadSound(sound.id , audioUrl)
            if(!success) console.warn(`Could not lead sound: ${sound.name} from ${audioUrl}`)
        })
    }

}

// Initializing app when the dom is ready
document.addEventListener('DOMContentLoaded' , ()=>{
    const app = new AmbientMixer()
    app.init()

    // Make app awailable for testing in browser
    window.app = app
})