<template>
    <div class="Homepage">
        <h1>
            Junrun Chen
        </h1>
        <!-- github icon -->
        <a href="https://github.com/FFantta" target="_blank" rel="noopener noreferrer">
            <svg height="32" aria-hidden="true" viewBox="0 0 24 24" version="1.1" width="32" data-view-component="true" class="octicon octicon-mark-github v-align-middle color-fg-default">
                <path d="M12.5.75C6.146.75 1 5.896 1 12.25c0 5.089 3.292 9.387 7.863 10.91.575.101.79-.244.79-.546 0-.273-.014-1.178-.014-2.142-2.889.532-3.636-.704-3.866-1.35-.13-.331-.69-1.352-1.18-1.625-.402-.216-.977-.748-.014-.762.906-.014 1.553.834 1.769 1.179 1.035 1.74 2.688 1.25 3.349.948.1-.747.402-1.25.733-1.538-2.559-.287-5.232-1.279-5.232-5.678 0-1.25.445-2.285 1.178-3.09-.115-.288-.517-1.467.115-3.048 0 0 .963-.302 3.163 1.179.92-.259 1.897-.388 2.875-.388.977 0 1.955.13 2.875.388 2.2-1.495 3.162-1.179 3.162-1.179.633 1.581.23 2.76.115 3.048.733.805 1.179 1.825 1.179 3.09 0 4.413-2.688 5.39-5.247 5.678.417.36.776 1.05.776 2.128 0 1.538-.014 2.774-.014 3.162 0 .302.216.662.79.547C20.709 21.637 24 17.324 24 12.25 24 5.896 18.854.75 12.5.75Z"></path>
            </svg>
        </a>

        <a class="text-link" :href="item.link" target="_blank" v-for="(item, index) in items" :key="index">
            <div class="box-container">
                <div class="box" >
                    <h2>{{ item.title }}</h2>
                    <p>{{ item.description }}</p>
                </div>
            </div>
        </a>

    </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { title: "Emotioninput Website", description: "A website connecte with Emotioninput Android App and show the information for controller." , link: "https://github.com/FFantta/web"},
        { title: "My Bill App", description: "An iOS app that can record the bill used by camera" , link:"https://github.com/FFantta/myBills"},
        { title: "Supa Vue Blog", description: "A blog website using Vue.js" , link:"https://github.com/FFantta/Supa-Vue-Blog"}
      ]
    };
  }
};
</script>

<style scoped>
.box-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
}

.box {
  width: 90%;
  max-width: 400px;
  border: 2px solid #cccccc;
  border-radius: 10px;
  padding: 20px;
  margin: 10px;
  background-color: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;
}

.box:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

h3 {
  margin: 0 0 10px;
  font-size: 1.5em;
}

p {
  margin: 0;
  font-size: 1em;
  color: #555555;
}

.text-link {
  text-decoration: none;
}

</style>