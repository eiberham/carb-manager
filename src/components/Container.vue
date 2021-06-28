<script>
export default {
  data: function() {
    return {
      recipe: {}
    };
  },
  mounted: function() {
    this.getRecipe();
  },
  methods: {
    /**
     * Fetches the recipe respectively.
     * @returns {void}
     */
    getRecipe: function() {
      fetch("https://60c10ba2b8d367001755666e.mockapi.io/recipe/1")
        .then(res => res.json())
        .then(res => {
          this.recipe = res;
        })
        .catch(err => console.error(err));
    }
  },
  render() {
    return this.$scopedSlots.default({
      recipe: this.recipe
    });
  }
};
</script>
