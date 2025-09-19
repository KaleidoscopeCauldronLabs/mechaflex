    export const steps = [
    { title: "Introduction", 
        section: "Getting Started",
        model: "./models/full.glb", 
        tiltY: 90, 
        description: `
            <h2>Introduction</h2>
            <p>This manual was designed to help you build your new Mechaflex model utilizing 3D models. Right now you should see a fully assembled Mechaflex with hand storage and tool storage.</p>
            <p>On desktop,left-click to rotate the view, right-click to pan, and use the scroll wheel to zoom in and out.</p>
            <p>On mobile, use one finger to rotate the view, two fingers to pan, and pinch to zoom in and out. It is <b>strongly</b> recommended to use landscape view on mobile devices.</p>
            <p>In the upper left you will find the controls panel. It contains the navigation dropdown where you can jump to a different step, as well as a selector for the background color, model colors, and version.</p>
            <p>There are buttons at the bottom to navigate to the previous or next step. (On mobile you might need to scroll down.)</p>
            <p>Refreshing the page will reset all colors and return you to this step. To reset the view of a step without resetting colors, go to the previous or next step and then return.</p>
            <p>Click the "Next" button at the bottom to continue.</p>
        ` },
    { title: "Tips", 
        section: "Getting Started",
        model: "./models/full.glb", 
        tiltY: 90, 
        description: `
            <h2>Tips</h2>
            <p>Use the color pickers on the left to set the colors of the frame and armor to match your kit. <i>Note: Even if your frame is black, it is not recommend to set the frame color to pure black, as it makes it really hard to see details. A very dark gray (51,51,51) works well.</i></p>
            <p>All steps will have an exploded view with arrows of the current step on the left/front, along with what it looks like when complete on the right/back.</p>
            <p>For many steps, rotating around and/or zooming in on the model will help you better see how the pieces fit together.</p>
            <p>Some parts have a tight fit and require a bit of force to snap together. If you are having trouble getting a piece to fit, you can <b><i>gently</i></b> tap it with a hammer or back of a screwdriver. Before resorting to this, make <b><i>absolutely sure</i></b> that you have the correct parts and correct orientation or you might break things.</p>
            <p>The words are usually not necessary for the building steps, but they may help clarify things if you are confused.</p>
            <p>If you have any problems, questions, or suggestions on any part of this guide, or break or lose a piece and need a replacement, please contact us at <a href="mailto:kaleidoscopecauldronlabs@gmail.com">kaleidoscopecauldronlabs@gmail.com</a>.</p>
        ` },
    { title: "Parts List", 
        section: "Getting Started",
        model: "./models/parts_list.glb", 
        rotationX: Math.PI / 2, 
        zoom: .75, 
        description: `
            <h2>Parts List</h2>
            <p>The Mechaflex kit should contain a paper copy of this parts list. If not they can be found here: <a href="./models/Parts_List_Miles.pdf" target="_blank" rel="noopener noreferrer">Miles</a> | <a href="./models/Parts_List_Frankie.pdf" target="_blank" rel="noopener noreferrer">Frankie</a>. Lay out each piece on your paper copy as you sort.</p>
            <p><i>Note: In order for the pieces to be scaled correctly when printing, on the print interface click "More settings" and select "Actual Size" or "Default" rather than "Fit to Page," "Fit to Printable Area," or "Fit to Paper"</i></p>
            <p>This build guide will use the parts in approximately the order they are listed on the parts list, so sorting will help everything go more smoothly.</p>
            <p>Be aware, some parts look very similar to others. Feel free to rotate and zoom in to see details of each part.</p>
            <p>The arms and legs sections have some repeated parts, 2 in the 2nd column (looks like Y) and 2 in the 3rd column (looks like sideways w)</p>
        ` },
    // ------------------BODY-------------------
    { title: "Head and Neck", 
        section: "Body",
        model: "./models/head_neck.glb", 
        tiltX: 350, 
        description: `
            <h2>Head and Neck</h2>
            <p>Press the head frame into the base of the head armor. Snap the neck joint into it, and add the neck armor.</p>
            <p>The head frame in this step can be a bit tricky to get all the way in. If needed you can use a small tool or stick to help shove it into place.</p>
        ` },
    { title: "Chest", 
        section: "Body",
        model: "./models/chest.glb", 
        description: `
            <h2>Chest</h2>
            <p>Press the lower chest armor onto the chest frame, then the upper chest armor onto the frame. The square holes in the back of the armor pieces and frame should all line up.</p>
        ` },
    { title: "Waist", 
        section: "Body",
        model: "./models/waist.glb", 
        tiltX: 70, 
        description: `
            <h2>Waist</h2>
            <p>Press the waist frame up into the waist armor.</p>
        ` },
    { title: "Hips a", 
        section: "Body",
        model: "./models/hips_a.glb", 
        tiltX: 80, 
        description: `
            <h2>Hips a</h2>
            <p>Snap the vertical hips frame onto the horizontal hips frame.</p>
        ` },
    { title: "Hips b", 
        section: "Body",
        model: "./models/hips_b.glb", 
        tiltX: 150, 
        tiltY: 20,
        description: `
            <h2>Hips b</h2>
            <p>Slide the pelvis connector armor (u shaped piece) onto the pelvis frame.</p>
            <p>Remember you can rotate the model around to better see how the pieces fit together.</p>
        ` },
    { title: "Hips c", 
        section: "Body",
        model: "./models/hips_c.glb", 
        tiltX: 900, 
        description: `
            <h2>Hips c</h2>
            <p>There are 2 tabs on the top of the pelvis connector armor (u shaped piece) that snap into the pelvis armor from below it.</p>
            <p>Make sure the flat side of the connector is facing the back, and the slanted side is facing the front.</p>
        ` },
    { title: "Attach Body", 
        section: "Body",
        model: "./models/attach_body.glb", 
        tiltX: 350, 
        description: `
            <h2>Attach Body</h2>
            <p>Snap the completed head, chest, waist, and hips together vertically.</p>
        ` },
    // ------------------ARMS-------------------
    { title: "Upper Arm a", 
        section: "Arms",
        model: "./models/upper_arm_a.glb", 
        tiltX: 100, 
        tiltY: 20,
        description: `
            <h2>Upper Arm a</h2>
            <p>You will need to build 2 arms. You can build them at the same time, or finish one and use the navigation to jump back here to start the other.</p>
            <p>Snap the shoulder connector (Y shaped) onto the upper arm frame.</p>
        ` },
    { title: "Upper Arm b", 
        section: "Arms",
        model: "./models/upper_arm_b.glb", 
        tiltX: 80, 
        description: `
            <h2>Upper Arm b</h2>
            <p>Slide the upper arm armor onto the upper arm frame as far as it will go. Make sure to not have it sideways.</p>
        ` },
    { title: "Lower Arm", 
        section: "Arms",
        model: "./models/lower_arm.glb", 
        tiltX: 50, 
        description: `
            <h2>Lower Arm</h2>
            <p>Slide the lower arm frame into the lower arm armor, paying attention to which way the frame is turned.</p>
        ` },
    { title: "Elbow", 
        section: "Arms",
        model: "./models/elbow.glb", 
        tiltX: 250, 
        description: `
            <h2>Elbow</h2>
            <p>The upper arm and lower arm frame both have a curved cutout shape on them. The elbow joint snaps into these cutouts, holding the arm together.</p>
        ` },
    { title: "Shoulder a", 
        section: "Arms",
        model: "./models/shoulder_a.glb", 
        tiltX: 20, 
        tiltY: 150,
        description: `
            <h2>Shoulder a</h2>
            <p>Snap the shoulder joint into the shoulder connector.</p>
        ` },
    { title: "Shoulder b", 
        section: "Arms",
        model: "./models/shoulder_b.glb", 
        tiltX: 20, 
        tiltY: 80,
        description: `
            <h2>Shoulder b</h2>
            <p>Slide the shoulder armor onto the shoulder joint.</p>
        ` },
    { title: "Hands", 
        section: "Arms",
        model: "./models/hands.glb", 
        tiltX: 0, 
        tiltY: 350,
        description: `
            <h2>Hands</h2>
            <p>Chose which set of hands you would like to add to your model and snap them onto the lower arm.</p>
            <p>From top to bottom on the storage they are: Open (this one is currently on my model,) Thumbs Up/Down, Climbing (can hang off of thin objects such as cardboard,) Grip (can hold tools,) High-five, and Pointing.</p>
            <p>Attach the rest of the hands to the hand storage. You can do it the same as displayed or however else you would like.</p>
        ` },
    { title: "Attach Arms", 
        section: "Arms",
        model: "./models/attach_arms.glb", 
        tiltX: 0, 
        tiltY: 200,
        description: `
            <h2>Attach Arms</h2>
            <p>Snap the completed arm onto the side of the chest of your model.</p>
            <p>If you have not completed the second arm yet, you can use the navigation dropdown to jump back to the "Upper Arm a" step to start it.</p>
        ` },
    // ------------------LEGS-------------------
    { title: "Upper Leg a", 
        section: "Legs",
        model: "./models/upper_leg_a.glb", 
        tiltX: 100, 
        tiltY: 20,
        description: `
            <h2>Upper Leg a</h2>
            <p>Snap the thigh connector (Y shaped) onto the upper leg frame.</p>
        ` },
    { title: "Upper Leg b", 
        section: "Legs",
        model: "./models/upper_leg_b.glb", 
        tiltX: 80, 
        description: `
            <h2>Upper Leg b</h2>
            <p>Slide the upper leg armor onto the upper leg frame. Make sure to not have it sideways.</p>
        ` },
    { title: "Lower Leg", 
        section: "Legs",
        model: "./models/lower_leg.glb", 
        tiltX: 50, 
        description: `
            <h2>Lower Leg</h2>
            <p>Slide the lower leg armor onto the lower leg frame. Make sure not to have it sideways.</p>
        ` },
    { title: "Knee", 
        section: "Legs",
        model: "./models/knee.glb", 
        tiltX: 350, 
        description: `
            <h2>Knee</h2>
            <p>The upper leg and lower leg frame both have a curved cutout shape on them. The knee joint snaps into these cutouts from behind, holding the leg together.</p>
            <p>The knee armor presses into the middle point of the knee joint from the front. It can help to bend the knee to press on the knee armor.</p>
        ` },
    { title: "Thigh", 
        section: "Legs",
        model: "./models/thigh.glb", 
        tiltX: 50, 
        description: `
            <h2>Thigh</h2>
            <p>Press the thigh armor onto the thigh connector. For the 2nd leg, the thigh armor should be on the opposite side.</p>
        ` },
    { title: "Feet", 
        section: "Legs",
        model: "./models/feet.glb", 
        tiltX: 100,
        tiltY: 100, 
        description: `
            <h2>Feet</h2>
            <p>Click the toes onto the feet. Press the ankle joints into the feet. </p>
            <p>The ankle joints should <b><i>not</i></b> be identical, they are mirrored. Make sure to flip around the ankle joint for the 2nd so you have different feet.</p>
        ` },
    { title: "Attach Legs", 
        section: "Legs",
        model: "./models/attach_legs.glb", 
        tiltX: 150, 
        tiltY: 50,
        description: `
            <h2>Attach Legs</h2>
            <p>Snap the completed legs onto the hips of the model and the feet onto the legs.</p>
            <p>Keep in mind that the feet are mirrored, so make sure to connect the correct foot to each leg. The smaller side of the ankle joint goes toward the center.</p>
        ` },
    // ------------------STAND and TOOLS-------------------
    { title: "Stand", 
        section: "Stand and Tools",
        model: "./models/stand.glb", 
        tiltX: 750, 
        tiltY: 250,
        description: `
            <h2>Stand</h2>
            <p>Snap the pieces of the stand together as shown. Sometimes rotating the top piece too quickly when later posing the model it can pop back off. If/When this happens you can just pop it back in.</p>
        ` },
    { title: "Stand Adapter", 
        section: "Stand and Tools",
        model: "./models/stand_adapter.glb", 
        rotationY: Math.PI * 1.54,
        description: `
            <h2>Stand Adapter</h2>
            <p>Press the stand adapter into the back of the model with the flat side up.</p>
        ` },
    { title: "Attach Stand", 
        section: "Stand and Tools",
        model: "./models/attach_stand.glb", 
        rotationY: -Math.PI * .5,
        tiltX: 0,
        description: `
            <h2>Attach Stand</h2>
            <p>Snap the completed stand onto the stand adapter.</p>
        ` },
    { title: "Tools", 
        section: "Stand and Tools",
        model: "./models/tools.glb", 
        tiltX: 0, 
        tiltY: 550,
        description: `
            <h2>Tools</h2>
            <p>The tools from left to right are: Hammer, Wrench, Axe, Spoon, Sword, Katana, and Staff</p>
            <p>Slide the tools into the tool storage. They can be in this order or however else you would like.</p>
        ` },
    { title: "Complete!", 
        section: "End",
        model: "./models/full.glb", 
        tiltY: 90, 
        description: `
            <h2>Congratulations!</h2>
            <p>You should now have your completed Mechaflex, enjoy your creation!</p>
        ` },
];