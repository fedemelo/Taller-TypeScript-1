"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Serie = void 0;
class Serie {
    constructor(_id, _name, _channel, _seasons, _description, _link, _cover) {
        this._id = _id;
        this._name = _name;
        this._channel = _channel;
        this._seasons = _seasons;
        this._description = _description;
        this._link = _link;
        this._cover = _cover;
    }
    /**
     * Getter id
     * @return {number}
     */
    get id() {
        return this._id;
    }
    /**
     * Getter title
     * @return {string}
     */
    get name() {
        return this._name;
    }
    /**
     * Getter channel
     * @return {string}
     */
    get channel() {
        return this._channel;
    }
    /**
     * Getter seasons
     * @return {number}
     */
    get seasons() {
        return this._seasons;
    }
    /**
     * Getter description
     * @return {string}
     */
    get description() {
        return this._description;
    }
    /**
     * Getter link
     * @return {string}
     */
    get link() {
        return this._link;
    }
    /**
     * Getter cover
     * @return {string}
     */
    get cover() {
        return this._cover;
    }
    /**
     * Setter id
     * @param {number} value
     */
    set id(value) {
        this._id = value;
    }
    /**
     * Setter title
     * @param {string} value
     */
    set name(value) {
        this._name = value;
    }
    /**
     * Setter channel
     * @param {string} value
     */
    set channel(value) {
        this._channel = value;
    }
    /**
     * Setter seasons
     * @param {number} value
     */
    set seasons(value) {
        this._seasons = value;
    }
    /**
     * Setter description
     * @param {string} value
     */
    set description(value) {
        this._description = value;
    }
    /**
     * Setter link
     * @param {string} value
     */
    set link(value) {
        this._link = value;
    }
    /**
     * Setter cover
     * @param {string} value
     */
    set cover(value) {
        this._cover = value;
    }
}
exports.Serie = Serie;
