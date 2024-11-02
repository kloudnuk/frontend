class Device {


    constructor (id, name, description, ipaddress, macaddress,
            status, gateway, wgaddress) {
        this.controllerid = id;
        this.name = name;
        this.description = description;
        this.ipaddress = ipaddress;
        this.macaddress = macaddress;
        this.status = status;
        this.gateway = gateway;
        this.wgaddress = wgaddress;
    }
    
    print() {
        return JSON.stringify(this);
    }
}
export default Device