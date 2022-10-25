// Protocol Buffers - Google's data interchange format
// Copyright 2008 Google Inc.  All rights reserved.
// https://developers.google.com/protocol-buffers/
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are
// met:
//
//     * Redistributions of source code must retain the above copyright
// notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above
// copyright notice, this list of conditions and the following disclaimer
// in the documentation and/or other materials provided with the
// distribution.
//     * Neither the name of Google Inc. nor the names of its
// contributors may be used to endorse or promote products derived from
// this software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
// "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
// LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
// A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
// OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
// LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
// DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
// THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

// @generated by protoc-gen-es v0.2.0 with parameter "ts_nocheck=false,target=js+dts"
// @generated from file google/protobuf/struct.proto (package google.protobuf, syntax proto3)
/* eslint-disable */

import {proto3} from "@bufbuild/protobuf";

/**
 * `NullValue` is a singleton enumeration to represent the null value for the
 * `Value` type union.
 *
 *  The JSON representation for `NullValue` is JSON `null`.
 *
 * @generated from enum google.protobuf.NullValue
 */
export const NullValue = proto3.makeEnum(
  "google.protobuf.NullValue",
  [
    {no: 0, name: "NULL_VALUE"},
  ],
);

/**
 * `Struct` represents a structured data value, consisting of fields
 * which map to dynamically typed values. In some languages, `Struct`
 * might be supported by a native representation. For example, in
 * scripting languages like JS a struct is represented as an
 * object. The details of that representation are described together
 * with the proto support for the language.
 *
 * The JSON representation for `Struct` is JSON object.
 *
 * @generated from message google.protobuf.Struct
 */
export const Struct = proto3.makeMessageType(
  "google.protobuf.Struct",
  () => [
    { no: 1, name: "fields", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "message", T: Value} },
  ],
);

Struct.prototype.toJson = function toJson(options) {
  const json = {}
  for (const [k, v] of Object.entries(this.fields)) {
    json[k] = v.toJson(options);
  }
  return json;
};

Struct.prototype.fromJson = function fromJson(json, options) {
  if (typeof json != "object" || json == null || Array.isArray(json)) {
    throw new Error("cannot decode google.protobuf.Struct from JSON " + proto3.json.debug(json));
  }
  for (const [k, v] of Object.entries(json)) {
    this.fields[k] = Value.fromJson(v);
  }
  return this;
};

/**
 * `Value` represents a dynamically typed value which can be either
 * null, a number, a string, a boolean, a recursive struct value, or a
 * list of values. A producer of value is expected to set one of these
 * variants. Absence of any variant indicates an error.
 *
 * The JSON representation for `Value` is JSON value.
 *
 * @generated from message google.protobuf.Value
 */
export const Value = proto3.makeMessageType(
  "google.protobuf.Value",
  () => [
    { no: 1, name: "null_value", kind: "enum", T: proto3.getEnumType(NullValue), oneof: "kind" },
    { no: 2, name: "number_value", kind: "scalar", T: 1 /* ScalarType.DOUBLE */, oneof: "kind" },
    { no: 3, name: "string_value", kind: "scalar", T: 9 /* ScalarType.STRING */, oneof: "kind" },
    { no: 4, name: "bool_value", kind: "scalar", T: 8 /* ScalarType.BOOL */, oneof: "kind" },
    { no: 5, name: "struct_value", kind: "message", T: Struct, oneof: "kind" },
    { no: 6, name: "list_value", kind: "message", T: ListValue, oneof: "kind" },
  ],
);

Value.prototype.toJson = function toJson(options) {
  switch (this.kind.case) {
    case "nullValue":
      return null;
    case "boolValue":
    case "numberValue":
    case "stringValue":
      return this.kind.value;
    case "structValue":
    case "listValue":
      return this.kind.value.toJson({...options, emitDefaultValues: true});
  }
  throw new Error("google.protobuf.Value must have a value");
};

Value.prototype.fromJson = function fromJson(json, options) {
  switch (typeof json) {
    case "number":
      this.kind = { case: "numberValue", value: json };
      break;
    case "string":
      this.kind = { case: "stringValue", value: json };
      break;
    case "boolean":
      this.kind = { case: "boolValue", value: json };
      break;
    case "object":
      if (json === null) {
        this.kind = { case: "nullValue", value: NullValue.NULL_VALUE };
      } else if (Array.isArray(json)) {
        this.kind = { case: "listValue", value: ListValue.fromJson(json) };
      } else {
        this.kind = { case: "structValue", value: Struct.fromJson(json) };
      }
      break;
    default:
      throw new Error("cannot decode google.protobuf.Value from JSON " + proto3.json.debug(json));
  }
  return this;
};

/**
 * `ListValue` is a wrapper around a repeated field of values.
 *
 * The JSON representation for `ListValue` is JSON array.
 *
 * @generated from message google.protobuf.ListValue
 */
export const ListValue = proto3.makeMessageType(
  "google.protobuf.ListValue",
  () => [
    { no: 1, name: "values", kind: "message", T: Value, repeated: true },
  ],
);

ListValue.prototype.toJson = function toJson(options) {
  return this.values.map(v => v.toJson());
}

ListValue.prototype.fromJson = function fromJson(json, options) {
  if (!Array.isArray(json)) {
    throw new Error("cannot decode google.protobuf.ListValue from JSON " + proto3.json.debug(json));
  }
  for (let e of json) {
    this.values.push(Value.fromJson(e));
  }
  return this;
};

