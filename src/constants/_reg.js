export const REG_COLOR_HEX = /^#[0-9a-fA-F]{6}$/;

export const REG_COLOR_RGBA = /(#([0-9a-f]{3}){1,2}|rgba\(\d{1,3}%?(,\s?\d{1,3}%?){2},\s?(1|0|0?\.\d+)\)|(rgb|hsl)\(\d{1,3}%?(,\s?\d{1,3}%?){2}\))/i;

export const REG_IMAGE_URL = /(http)?s?:?(\/\/[^"']*\.(jpg|jpeg|gif|png))/;