/*global prestaconf*/
import Request from "superagent";

export default class PrestaService {
  key = "ZB5QSEBS6P219Z77KKPCXQ4UXZAVNG6M";
  url = "https://shop.divina.kommpass-staging.ch/api/";

  constructor() {
    if (typeof prestaconf !== "undefined") {
      if (prestaconf.key) {
        this.key = prestaconf.key;
      }
      if (prestaconf.url) {
        this.url = prestaconf.url;
      }
    }
  }

  get(resource, fields = "full") {
    let request = {
      ws_key: this.key,
      output_format: "JSON",
      "filter[active]": "[1]",
      display: Array.isArray(fields) ? "[" + fields.join(",") + "]" : fields
    };

    let res = Request.get(this.url + resource).query(request);

    return res;
  }

  generateRequestParams(params) {
    let esc = encodeURIComponent;
    return Object.keys(params)
      .map(k => esc(k) + "=" + esc(params[k]))
      .join("&");
  }
}
