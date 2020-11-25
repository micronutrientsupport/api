export class StandardJsonResponse<T = string> {
  public msg: string;
  public type: string;
  public data: T | string;
  public props: object; // needs reviewing what this is
  public meta: string; // needs reviewing what this is

  constructor(
    message: string,
    data?: T,
    type = 'Success 200',
    props: object = {},
    meta = '',
  ) {
    this.msg = message;
    this.data = (null != data) ? data : '';
    this.type = type;
    this.props = props;
    this.meta = meta;
  }

}
