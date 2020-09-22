<template>
  <v-sheet>
    <div class="block-buttons">
      <v-btn
          v-if="image && selectedFile"
          color="primary"
          :loading="getLoadingOcr"
          @click="sendImageToOCR"
      >
        Отправить
      </v-btn>
      <v-btn
          color="primary"
          class="text-none"
          :loading="isSelecting || getLoadingOcr"
          @click="onButtonClick"
      >
        <v-icon left>mdi-cloud-upload</v-icon>
        {{ buttonText }}
      </v-btn>
    </div>
    <input
        ref="uploader"
        class="d-none"
        type="file"
        accept="image/*"
        @change="onFileChanged"
    >
    <v-img :src="getDefaultImage" contain></v-img>
  </v-sheet>
</template>

<script>
export default {
  name: "Loading",
  data: () => ({
    defaultButtonText: 'Прикрепите фото паспорта',
    selectedFile: null,
    isSelecting: false,
    image: {}
  }),
  computed: {
    buttonText() {
      return this.selectedFile ? this.selectedFile.name : this.defaultButtonText
    },
    getDefaultImage() {
      return (this.selectedFile && this.image) ? this.image : "https://cdn.vuetifyjs.com/images/parallax/material2.jpg"
    },
    getLoadingOcr() {
      return this.$store.state.ocr.loading;
    }
  },
  methods: {
    onButtonClick() {
      this.isSelecting = true
      window.addEventListener('focus', () => {
        this.isSelecting = false
      }, {once: true})
      this.$refs.uploader.click()
    },
    onFileChanged(e) {
      this.selectedFile = e.target.files[0];
      const reader = new FileReader();
      reader.addEventListener('load', (event) => {
        this.image = event.target.result;
      });
      reader.readAsDataURL(this.selectedFile);
      // do something
    },
    sendImageToOCR() {
      this.$store.dispatch('ocr/recognize', this.image);
      //startOCR
    }
  }
}
</script>

<style scoped>
.v-sheet {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.block-buttons {
  position: absolute;
  z-index: 1;
  display: flex;
}

.v-btn {
  margin: 10px;
}

.v-image {
  max-height: 80vh;
}
</style>
