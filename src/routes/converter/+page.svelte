<script lang="ts">
    import RadioGroup from "../../components/converter/radioGroup.svelte";
    import Table from "../../components/table.svelte";

    const rates: any = {
      1: [1, 1/2, 8, 2/5, 10, 1/3, 5, 1/14, 5/3, 18],
      2: [3/2, 1, 14, 1, 15, 1/2, 1/2, 10, 1/7, 2, 30],
      3: [1/10, 1/14, 1, 1/15, 2/3, 1/20, 1/2, 1/100, 1/10, 3/2],
      4: [5/3, 2/3, 10, 1, 12, 1/2, 8, 1/10, 3/2, 20],
      5: [1/12, 1/18, 2/3, 1/12, 1, 1/35, 2/3, 1/110, 1/10, 1],
      6: [5/2, 3/2, 16, 30, 1, 16, 1/7, 3, 40],
      7: [1/8, 1/12, 3/2, 1/10, 5/4, 1/16, 1, 1/50, 1/4, 5/2], 
      8: [4/7, 2/7, 11/2, 2/5, 13/2, 4/15, 5/2, NaN, 1, 21/2],
      9: [10, 5, 90, 7, 105, 4, 45, 1, 16, 176],
      10: [2/3, 1/3, 6, 1/2, 7, 2/7, 3, 1/16, 1, 11],
      11: [1/20, 1/35, 3/5, 1/25, 2/3, 1/45, 1/3, 1/176, 1/11, 1]
    }

    const header = {
      stater: 'Статер',
      hect: 'Гект',
      hector: 'Гектор',
      drahmae: 'Драхма Э',
      tetradrahma: 'Тетрадрахма Э',
      drahmam: 'Драхма М',
      tetradrahmam: 'Тетрадрахма М',
      dariam: 'Дария, М Динар',
      darias: 'Дария,С Динар',
      dariag: 'Дария,З Динар',
    }

    let selectedCountry: number = 1;
    let money: number = 0;

    let values: object[] = []

    $: money && selectedCountry && calculateV2(money, selectedCountry.toString())

    function calculateV2(money: number, selected: string) {
      const selectedRates = rates[selected];

      values = [];
      interface DynamicObject {
        [key: string]: string;
      }

      const object: DynamicObject = {}

      for (let i = 1; i <= 10; i++) {
          const rate = selectedRates[i - 1];
          const result = money / rate;
          object[i] = result.toFixed(2);
      }

      values.push(object);
    }
</script>
<h3>Сколько получу в стране за эту деньгу</h3>

<Table header={header} data={values}/>
<RadioGroup bind:selectedValue={selectedCountry}/>

<div>
  <label for="cash">Введите количество деньги</label>
  <br />
  <input min="0" max="10000000" bind:value="{money}"/>
</div>

<style>
  h3 {
    margin-top: -40px;
  }
</style>