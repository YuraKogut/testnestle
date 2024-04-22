// Get all rows
const rows = document.querySelectorAll('.subcomponents');

// Loop through each row
rows.forEach(row => {
    // Get all blocks in the row
    const blocks = row.querySelectorAll('.subcomponent');

    // Initialize max height for this row
    let maxHeight = 0;

    // Loop through blocks to find maximum height
    blocks.forEach(block => {
        const blockHeight = block.offsetHeight;
        if (blockHeight > maxHeight) {
            maxHeight = blockHeight;
        }
    });

    // Set height of all blocks in the row to the maximum height
    blocks.forEach(block => {
        block.style.height = maxHeight + 'px';
    });
});

        const image = document.getElementById('image');
        const button = document.getElementById('ctaButton');
        const tooltip = document.getElementById('tooltip');

        // Add event listener for click on the image
        image.addEventListener('click', function(event) {
            // Scroll to the button
            button.scrollIntoView({ behavior: 'smooth', block: 'center' });

            // Show tooltip
            const headingText = "Research More Organic Foods"; // Replace with your tooltip message
            tooltip.textContent = headingText;
            tooltip.style.display = 'block';
            tooltip.style.bottom = -67 + 'px';
            tooltip.style.left = 82 + 'px';

            // Prevent default action (e.g., following a link)
            event.preventDefault();
            event.stopPropagation();
        });

        // Add event listener for click on the button to hide the tooltip
        button.addEventListener('click', function(event) {
            // Hide tooltip
            tooltip.style.display = 'none';
        });

        // Add event listener for click anywhere on the page to hide the tooltip
        document.addEventListener('click', function(event) {
            // Hide tooltip
            tooltip.style.display = 'none';
        });