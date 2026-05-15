(ns agents
  (:require [reagent.dom :as rdom]
            [re-frame.core :as rf]))

;; -- Events --

(rf/reg-event-db
  ::set-agents
  (fn [db [_ agents]]
    (assoc db ::agents agents)))

;; -- Subscriptions --

(rf/reg-sub
  ::agents
  (fn [db _]
    (get db ::agents [])))

;; -- Views --

(defn agent-card [{:keys [id name version description tags]}]
  [:li {:key id}
   [:strong name] [:span " v" version]
   [:p description]
   [:div (for [tag tags] [:span {:key tag} tag])]])

(defn agents-view []
  (let [agents @(rf/subscribe [::agents])]
    (if (empty? agents)
      [:p "Loading…"]
      [:ul (for [agent agents]
             ^{:key (:id agent)} [agent-card agent])])))

;; -- Bridge --

(.addEventListener js/document "agents-loaded"
  (fn [e]
    (rf/dispatch [::set-agents (js->clj (.-detail e) :keywordize-keys true)])))

(rdom/render [agents-view] (.getElementById js/document "app"))
