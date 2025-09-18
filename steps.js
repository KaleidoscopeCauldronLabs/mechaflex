export const steps = [
    { title: "Introduction", 
      model: "./models/full.glb", 
      tiltY: 90, 
      description: `
            <h2>Introduction</h2>
            <p>This manual was designed to help you build your new Mechaflex model utilizing 3D models.</p>
            <p>Right now you should see a fully assembled Mechaflex with hand storage and accessory storage.</p>
            <p>Left-click to rotate the view, right-click to pan, and use the scroll wheel to zoom in and out.</p>
            <p>In the upper left corner you will find the navigation menu, which you can use to jump to different steps of this guide.
            You should also see an area to change the background color, model colors, and version.</p>
            <p>At the bottom you will see buttons to navigate to the previous or next step.</p>
            <p>The next step will help you sort out the parts of the kit to make it easier to assemble. Click the "Next" button at the bottom to continue.</p>
        ` },
    { title: "Parts List", 
      model: "./models/parts_list.glb", 
      rotationX: Math.PI / 2, 
      zoom: .75, 
      description: `
            <h2>Parts List</h2>
            <p>The Mechaflex kit should contain a paper copy of this parts list. If not they can be found here: <a href="./models/Parts_List_Miles.pdf" target="_blank" rel="noopener noreferrer">Miles</a> | <a href="./models/Parts_List_Frankie.pdf" target="_blank" rel="noopener noreferrer">Frankie</a>. Lay out each piece on your paper copy as you sort.</p>
            <p><i>Note: In order for the pieces to be scaled correctly when printing, on the print interface click "More settings" and select "Actual Size" or "Default" rather than "Fit to Page," "Fit to Printable Area," or "Fit to Paper"</i></p>
            <p>Use the color pickers on the left to set the colors of the frame and armor to match your kit.</p>
            <p><i>Note: Even if your frame is black, it is not recommend to set the frame color to pure black, as it makes it really hard to see details. A very dark gray (51,51,51) works well.</i></p>
            <p>Be aware, some parts look very similar to others. Feel free to rotate and zoom in to see details of each part.</p>
            <p>The arms and legs sections have some repeated parts, 2 in the 2nd column (looks like Y) and 2 in the 3rd column (looks like sideways w)</p>
            <p>Add the tools and hands to their holders while sorting.</p>
        ` },
    { title: "Head and Neck", 
      model: "./models/head_neck.glb", 
      tiltX: 350, 
      description: `
            <h2>Head and Neck</h2>
            <p>Press the head frame piece into the base of the head armor piece. Snap the neck joint into it, and add the neck armor.</p>
            <p>The head frame piece in this step can be a bit tricky to get all the way in. If needed you can use a small tool or stick to help shove it into place.</p>
        ` },
    { title: "Chest", 
      model: "./models/chest.glb", 
      description: `
            <h2>Chest</h2>
            <p>Press the lower chest armor onto the chest frame, then the upper chest armor onto the frame. The holes in the back of the armor pieces should line up.</p>
        ` },
    { title: "Waist", 
      model: "./models/.glb", 
      tiltX: 350, 
      description: `
            <h2></h2>
            <p></p>
        ` },
    { title: "Hips a", 
      model: "./models/.glb", 
      tiltX: 350, 
      description: `
            <h2></h2>
            <p></p>
        ` },
    { title: "Hips b", 
      model: "./models/.glb", 
      tiltX: 350, 
      description: `
            <h2></h2>
            <p></p>
        ` },
    { title: "Hips c", 
      model: "./models/.glb", 
      tiltX: 350, 
      description: `
            <h2></h2>
            <p></p>
        ` },
    { title: "Attach Body", 
      model: "./models/.glb", 
      tiltX: 350, 
      description: `
            <h2></h2>
            <p></p>
        ` },

    { title: "Upper Arm a", 
      model: "./models/.glb", 
      tiltX: 350, 
      description: `
            <h2></h2>
            <p></p>
        ` },
    { title: "Upper Arm b", 
      model: "./models/.glb", 
      tiltX: 350, 
      description: `
            <h2></h2>
            <p></p>
        ` },
    { title: "Lower Arm", 
      model: "./models/.glb", 
      tiltX: 350, 
      description: `
            <h2></h2>
            <p></p>
        ` },
    { title: "Elbow and Hand", 
      model: "./models/.glb", 
      tiltX: 350, 
      description: `
            <h2></h2>
            <p></p>
        ` },
    { title: "Shoulder a", 
      model: "./models/.glb", 
      tiltX: 350, 
      description: `
            <h2></h2>
            <p></p>
        ` },
    { title: "Shoulder b", 
      model: "./models/.glb", 
      tiltX: 350, 
      description: `
            <h2></h2>
            <p></p>
        ` },
    { title: "Attach Arms", 
      model: "./models/.glb", 
      tiltX: 350, 
      description: `
            <h2></h2>
            <p></p>
        ` },
    { title: "Upper Leg a", 
      model: "./models/.glb", 
      tiltX: 350, 
      description: `
            <h2></h2>
            <p></p>
        ` },
    { title: "Upper Leg b", 
      model: "./models/.glb", 
      tiltX: 350, 
      description: `
            <h2></h2>
            <p></p>
        ` },
    { title: "Lower Leg", 
      model: "./models/.glb", 
      tiltX: 350, 
      description: `
            <h2></h2>
            <p></p>
        ` },
    { title: "Knee", 
      model: "./models/.glb", 
      tiltX: 350, 
      description: `
            <h2></h2>
            <p></p>
        ` },
    { title: "Thigh", 
      model: "./models/.glb", 
      tiltX: 350, 
      description: `
            <h2></h2>
            <p></p>
        ` },
    { title: "Feet", 
      model: "./models/.glb", 
      tiltX: 350, 
      description: `
            <h2></h2>
            <p></p>
        ` },
    { title: "Attach Legs", 
      model: "./models/.glb", 
      tiltX: 350, 
      description: `
            <h2></h2>
            <p></p>
        ` },
    { title: "Stand", 
      model: "./models/.glb", 
      tiltX: 350, 
      description: `
            <h2></h2>
            <p></p>
        ` },
    { title: "Attach Stand", 
      model: "./models/.glb", 
      tiltX: 350, 
      description: `
            <h2></h2>
            <p></p>
        ` },
    { title: "Tools", 
      model: "./models/.glb", 
      tiltX: 350, 
      description: `
            <h2></h2>
            <p></p>
        ` },
    { title: "Complete!", 
      model: "./models/full.glb", 
      tiltX: 350, 
      description: `
            <h2>Congratulations!</h2>
            <p>You should now have your completed Mechaflex, enjoy your creation!</p>
        ` },
];