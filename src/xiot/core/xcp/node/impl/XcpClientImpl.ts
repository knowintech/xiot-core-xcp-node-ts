import * as WebSocket from 'ws';
import {XcpClientBase} from 'xiot-core-xcp-ts/dist/xiot/core/xcp/impl/XcpClientBase';
import {XcpClientCipher} from 'xiot-core-xcp-ts/dist/xiot/core/xcp/XcpClientCipher';
import {XcpFrameCodecType} from 'xiot-core-xcp-ts/dist/xiot/core/xcp/common/XcpFrameCodecType';

export class XcpClientImpl extends XcpClientBase {

  constructor(serialNumber: string,
              productId: number,
              deviceType: string,
              cipher: XcpClientCipher,
              codec: XcpFrameCodecType) {
    super(serialNumber, productId, deviceType, cipher, codec);
  }

  protected createWebSocket(url: string): any {
    return new WebSocket(url);
  }
}
