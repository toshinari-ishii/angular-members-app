import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const members = [
      { id: 9, name: '大城 賢剛' ,number:"S09963"},
      { id: 5, name: '新川 盛幸' ,number:"T01530"},
      { id: 6, name: '徳元 拓真' ,number:"S02869"},
      { id: 3, name: '高良 真也' ,number:"T00944"},
      { id: 8, name: '宮里 優希' ,number:"S06586"},
      { id: 1, name: '福士 義和' ,number:"A14921"},
      { id: 2, name: '仲里 淳矢' ,number:"T00114"},
      { id: 7, name: '金城 裕也' ,number:"T00234"},
      { id: 10, name:'石井 俊成' ,number:"S10659"},
      { id: 4, name: '具志 直'  ,number:"T00070"}
    ];
    return { members };
  }
}
