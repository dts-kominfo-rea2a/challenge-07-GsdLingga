const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
(promiseOutput = async (emosi) => {
  try {
    const theatherIXX = await promiseTheaterIXX();
    const theaterVGC = await promiseTheaterVGC();

    const combineData = [...theatherIXX, ...theaterVGC];

    const filterData = combineData.filter((element) => element.hasil === emosi);

    return filterData.length;
  } catch (error) {
    console.log(error);
  }
})();

module.exports = {
  promiseOutput,
};
