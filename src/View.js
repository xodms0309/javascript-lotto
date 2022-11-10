const { Console } = require('@woowacourse/mission-utils');
class View {
  printBoughtLotto(amount, lottoBundle) {
    Console.print(amount + '개를 구매했습니다.');
    for (const lotto of lottoBundle) {
      Console.print('[' + lotto + ']');
    }
  }

  printResult(result, rate) {
    Console.print('당첨 통계');
    Console.print('---');
    result.map((count, idx) => {
      Console.print(`${idx + 3}개 일치 (5,000원) - ` + count + '개');
    });
    Console.print(`총 수익률은 ${rate}%입니다.`);
    Console.close();
  }
}
module.exports = View;
