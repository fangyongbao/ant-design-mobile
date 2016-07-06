interface ButtonProps {
  /** whether button is disabled*/
  disabled?:boolean;
  size?:'large'|'small';
  type?:'primary'|'default';
  ghost?:boolean;
  inline?:boolean;
  loading?:boolean;
  /** web only */
  prefixCls?:string;
}

export default ButtonProps;
