import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'articleFilter'
})
export class ArticleFilterPipe implements PipeTransform {

  transform(list: any[], field: string, keyword: string): any {
    if (!field || !keyword) {
      return list;
    }
    return list.filter(item => {
      const itemFiledValue = item.attributes.title.toLowerCase();
      return itemFiledValue.indexOf(keyword) >= 0;
    });
  }

}
