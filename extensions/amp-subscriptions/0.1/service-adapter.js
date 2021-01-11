/**
 * Copyright 2018 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {PageConfig as PageConfigInterface} from '../../../third_party/subscriptions-project/config';

export class ServiceAdapter {
  /**
   * @param {./amp-subscriptions.SubscriptionService} subscriptionService
   */
  constructor(subscriptionService) {
    this.subscriptionService_ = subscriptionService;
  }

  /**
   * Returns the analytics service for subscriptions.
   * @return {!./analytics.SubscriptionAnalytics}
   */
  getAnalytics() {
    return this.subscriptionService_.getAnalytics();
  }

  /**
   * Returns a promise for all platform entitlements.
   * @return {!Promise<!Array<!./entitlement.Entitlement>>}
   */
  getAllPlatformsEntitlements() {
    return this.subscriptionService_.platformStore.getAllPlatformsEntitlements();
  }

  /**
   * Returns the singleton Dialog instance
   * @return {!./dialog.Dialog}
   */
  getDialog() {
    return this.subscriptionService_.getDialog();
  }

  /**
   * Returns the encrypted document key for the specified service.
   * @param {string} serviceId
   * @return {?string}
   */
  getEncryptedDocumentKey(serviceId) {
    return this.subscriptionService_.getEncryptedDocumentKey(serviceId);
  }

  /**
   * Returns the page config.
   * @return {!PageConfigInterface}
   */
  getPageConfig() {
    return this.subscriptionService_.getPageConfig();
  }

  /**
   * Returns the reader ID for the specified service.
   * @param {string} serviceId
   * @return {!Promise<string>}
   */
  getReaderId(serviceId) {
    return this.subscriptionService_.getReaderId(serviceId);
  }

  /**
   * gets Score factors for all platforms
   * @return {!Promise<!JsonObject>}
   */
  getScoreFactorStates() {
    return this.subscriptionService_.getScoreFactorStates();
  }

  /**
   * Delegates actions to local platform.
   * @param {string} action
   * @param {?string} sourceId
   * @return {!Promise<boolean>}
   */
  delegateActionToLocal(action, sourceId) {
    return this.delegateActionToService(action, 'local', sourceId);
  }

  /**
   * Delegates actions to a given service.
   * @param {string} action
   * @param {string} serviceId
   * @param {?string} sourceId
   * @return {!Promise<boolean>}
   */
  delegateActionToService(action, serviceId, sourceId) {
    return this.subscriptionService_.delegateActionToService(
      action,
      serviceId,
      sourceId
    );
  }

  /**
   * Delegate UI decoration to another service.
   * @param {!Element} element
   * @param {string} serviceId
   * @param {string} action
   * @param {?JsonObject} options
   */
  decorateServiceAction(element, serviceId, action, options) {
    this.subscriptionService_.decorateServiceAction(
      element,
      serviceId,
      action,
      options
    );
  }

  /**
   * Reauthorize platforms
   */
  resetPlatforms() {
    this.subscriptionService_.resetPlatforms();
  }

  /**
   * Returns login platform based on platform selection
   *
   * @return {!./subscription-platform.SubscriptionPlatform}
   */
  selectPlatformForLogin() {
    return this.subscriptionService_.selectPlatformForLogin();
  }
}
