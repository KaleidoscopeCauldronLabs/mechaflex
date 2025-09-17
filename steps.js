export const steps = [
    { title: "Introduction", model: "./models/00_full.glb", description: `
            <h2>Introduction</h2>
            <p>This manual was designed to help you build your new Mechaflex model utilizing 3D models.</p>
            <p>Right now you should see a fully assembled Mechaflex with hand storage and accessory storage.</p>
            <p>Left-click to rotate the view, right-click to pan, and use the scroll wheel to zoom in and out.</p>
            <p>In the upper left corner you will find the navigation menu, which you can use to jump to different steps of this guide.
            You should also see an area to change the background color, model colors, and version.</p>
            <p>At the bottom you will see buttons to navigate to the previous or next step.</p>
            <p>The next step will help you sort out the parts of the kit to make it easier to assemble. Click the "Next" button at the bottom to continue.</p>
        ` },
    { title: "Step 1: Sort Your Parts", model: "./models/01_list.glb", rotationX: Math.PI / 2, description: `
            <h2>Step 1: Sort Your Parts</h2>
            <p>Use the color pickers on the left to set the colors of the frame and armor to match your kit.</p>
            <p><i>Note: Even if your frame is black, it is not recommend to set the frame color to pure black, as it makes it really hard to see details. A very dark gray (51,51,51) works well.</i></p>
            <p>The Mechaflex kit should have a paper copy of this parts list. Lay out each piece on your paper copy as you sort.</p>
            <p>Be aware, some parts look very similar to others. Feel free to rotate and zoom in to see details of each part.</p>
            <p>The arms and legs sections have some repeated parts, 2 in the 2nd column and 2 in the 3rd column of each.</p>
        ` },
    { title: "Step 2: Assemble the Head", model: "./models/02_head.glb", description: "all the text for step 2" },
];