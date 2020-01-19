"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 上記のtypeofによる型クエリとJSON型推論を利用すると、リソース参照から型定義を抽出可能
/**
  type Users = {
    "id": number;
    "created_at": string;
    "profile": {
        "name": {
            "first": string;
            "last": string;
        };
        "age": number;
        "gender": string;
        "enabled": boolean;
    };
  }[]
 */
