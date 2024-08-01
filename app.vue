<template>
  <div>
    <div
      v-for="(circle, index) in circles"
      :key="index"
      class="circle bg-amber-700"
      :style="{
        left: circle.x + 'px',
        top: circle.y + 'px',
        backgroundColor: circle.color,
        transform: `scale(${(circles.length - index) / circles.length})`
      }"
    ></div>

    <div class="flex w-fit mx-auto">
    <img class="mx-auto h-24 mt-20 mx-auto hover:border-4 border-black border-dashed rounded-lg m-4 p-2" src="./public/computer.svg" />
    </div>

    <div class="text-center mt-10 flex flex-col">
      <span class="text-9xl font-semibold tracking-tight text-stone-800 title">rutwik hiwalkar</span>
      <span class="text-6xl font-semibold mt-4">software engineer building useful cool shit</span>
    </div>

    <div class="flex border-2 border-black border-dashed rounded-lg text-2xl font-semibold mx-auto w-fit mt-10">
      <span class="border-r-2 border-black border-dashed py-1.5 px-2 hover:bg-amber-300 transition rounded-l-lg">
        <a href="https://rutwikhdev.github.io" target="_blank">Blog</a>
      </span>
      <span class="border-r-2 border-black border-dashed py-1.5 px-2 hover:bg-amber-300 transition">
        <a href="https://github.com/rutwikhdev" target="_blank">Github</a>
      </span>
      <span class="border-r-2 border-black border-dashed py-1.5 px-2 hover:bg-amber-300 transition">
        <a href="rutwikresume.pdf" target="_blank">Resume</a>
      </span>
      <span class="py-1.5 px-2 hover:bg-amber-300 transition rounded-r-lg">
        <a href="https://x.com/rutwikhiwalkar_" target="_blank">Twitter</a>
      </span>
    </div>

    <div class="mb-10 mx-auto absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-md text-center flex-col text-xs">
      <img class="h-12 w-full mb-4" src="./public/bunny.svg" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      circles: Array.from({ length: 20 }, () => ({ x: 0, y: 0, color: 'black' })),
      mouseX: 0,
      mouseY: 0,
    };
  },
  mounted() {
    this.initCircles();
    window.addEventListener("mousemove", this.updateMousePosition);
    this.animateCircles();
  },
  beforeDestroy() {
    window.removeEventListener("mousemove", this.updateMousePosition);
  },
  methods: {
    updateMousePosition(event) {
      this.mouseX = event.clientX;
      this.mouseY = event.clientY;
    },
    animateCircles() {
      // Set the position of the first circle to the mouse position
      this.circles[0].x = this.mouseX - 12; // Center the circle
      this.circles[0].y = this.mouseY - 12; // Center the circle

      // Update the position of each subsequent circle to follow the previous one
      for (let i = 1; i < this.circles.length; i++) {
        const prevCircle = this.circles[i - 1];
        const currentCircle = this.circles[i];

        currentCircle.x += (prevCircle.x - currentCircle.x) * 0.6;
        currentCircle.y += (prevCircle.y - currentCircle.y) * 0.6;
      }

      requestAnimationFrame(this.animateCircles);
    },
    initCircles() {
      // Initialize circles if needed
      var colors = [
        "#ffb56b",
        "#fdaf69",
        "#f89d63",
        "#f59761",
        "#ef865e",
        "#ec805d",
        "#e36e5c",
        "#df685c",
        "#d5585c",
        "#d1525c",
        "#c5415d",
        "#c03b5d",
        "#b22c5e",
        "#ac265e",
        "#9c155f",
        "#950f5f",
        "#830060",
        "#7c0060",
        "#680060",
        "#60005f",
        "#48005f",
        "#3d005e"
      ];

      this.circles.forEach((circle, index) => {
        circle.x = 0;
        circle.y = 0;
        circle.color = colors[index % colors.length]
      });
    },
  },
};
</script>
